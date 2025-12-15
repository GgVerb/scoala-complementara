import { eq, count } from "drizzle-orm";
import { db } from "./db";
import { 
  users, newsletterSubscriptions, contactMessages, studentApplications,
  type User, type InsertUser, type NewsletterSubscription, type InsertNewsletterSubscription, 
  type ContactMessage, type InsertContactMessage, type StudentApplication, type InsertStudentApplication
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionsCount(): Promise<number>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createStudentApplication(application: InsertStudentApplication): Promise<StudentApplication>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const [existingSubscription] = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, insertSubscription.email));
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        throw new Error("Email already subscribed");
      } else {
        const [reactivated] = await db
          .update(newsletterSubscriptions)
          .set({ isActive: true })
          .where(eq(newsletterSubscriptions.id, existingSubscription.id))
          .returning();
        return reactivated;
      }
    }

    const [subscription] = await db
      .insert(newsletterSubscriptions)
      .values(insertSubscription)
      .returning();
    return subscription;
  }

  async getNewsletterSubscriptionsCount(): Promise<number> {
    const [result] = await db
      .select({ count: count() })
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.isActive, true));
    return result?.count ?? 0;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async createStudentApplication(insertApplication: InsertStudentApplication): Promise<StudentApplication> {
    const [application] = await db
      .insert(studentApplications)
      .values(insertApplication)
      .returning();
    return application;
  }
}

export const storage = new DatabaseStorage();
