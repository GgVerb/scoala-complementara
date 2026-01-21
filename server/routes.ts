import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertNewsletterSubscriptionSchema, 
  insertContactMessageSchema, 
  insertStudentApplicationSchema
} from "@shared/schema";
import { z } from "zod";

import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static PDF serving with correct MIME type
  app.get("/Gheorghe-Lungu-FlowCV.pdf", (req, res) => {
    const filePath = path.resolve(process.cwd(), "client", "public", "Gheorghe-Lungu-FlowCV.pdf");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Gheorghe-Lungu-FlowCV.pdf");
      res.sendFile(filePath);
    } else {
      res.status(404).send("File not found");
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ success: true, message: "Subscribed successfully!", subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid email address" });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ success: false, message: "Failed to subscribe" });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!", contactMessage: message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Please fill in all required fields" });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: "Failed to send message" });
      }
    }
  });

  // Student application endpoint
  app.post("/api/student-application", async (req, res) => {
    try {
      const validatedData = insertStudentApplicationSchema.parse(req.body);
      const application = await storage.createStudentApplication(validatedData);
      
      res.json({ success: true, message: "Application submitted successfully!", application });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Please fill in all required fields" });
      } else {
        console.error("Student application error:", error);
        res.status(500).json({ success: false, message: "Failed to submit application" });
      }
    }
  });

  // Get newsletter subscriptions count (for admin purposes)
  app.get("/api/newsletter/count", async (req, res) => {
    try {
      const count = await storage.getNewsletterSubscriptionsCount();
      res.json({ count });
    } catch (error) {
      console.error("Newsletter count error:", error);
      res.status(500).json({ message: "Failed to get newsletter count" });
    }
  });





  const httpServer = createServer(app);
  return httpServer;
}
