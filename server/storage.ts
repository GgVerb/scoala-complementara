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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private contactMessages: Map<number, ContactMessage>;
  private studentApplications: Map<number, StudentApplication>;
  private currentUserId: number;
  private currentNewsletterSubscriptionId: number;
  private currentContactMessageId: number;
  private currentStudentApplicationId: number;

  constructor() {
    this.users = new Map();
    this.newsletterSubscriptions = new Map();
    this.contactMessages = new Map();
    this.studentApplications = new Map();
    this.currentUserId = 1;
    this.currentNewsletterSubscriptionId = 1;
    this.currentContactMessageId = 1;
    this.currentStudentApplicationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === insertSubscription.email
    );
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        throw new Error("Email already subscribed");
      } else {
        // Reactivate existing subscription
        existingSubscription.isActive = true;
        this.newsletterSubscriptions.set(existingSubscription.id, existingSubscription);
        return existingSubscription;
      }
    }

    const id = this.currentNewsletterSubscriptionId++;
    const subscription: NewsletterSubscription = {
      id,
      email: insertSubscription.email,
      subscribedAt: new Date(),
      isActive: true,
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptionsCount(): Promise<number> {
    return Array.from(this.newsletterSubscriptions.values()).filter(sub => sub.isActive).length;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = {
      id,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async createStudentApplication(insertApplication: InsertStudentApplication): Promise<StudentApplication> {
    const id = this.currentStudentApplicationId++;
    const application: StudentApplication = {
      id,
      studentName: insertApplication.studentName,
      parentName: insertApplication.parentName,
      studentPhone: insertApplication.studentPhone || null,
      parentPhone: insertApplication.parentPhone,
      createdAt: new Date(),
    };
    this.studentApplications.set(id, application);
    return application;
  }




}

export const storage = new MemStorage();
