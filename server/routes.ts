import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Location detection proxy endpoint (if needed for CORS)
  app.get("/api/location", async (req, res) => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Location detection failed:', error);
      res.status(500).json({ error: "Failed to detect location" });
    }
  });

  // Device compatibility check endpoint
  app.post("/api/compatibility", (req, res) => {
    const { device, location } = req.body;
    
    // In a real application, this would check against a database
    // For now, we'll assume all devices are compatible
    res.json({
      compatible: true,
      device,
      location,
      message: "Your device and location are fully compatible with Starlink Direct to Cell technology"
    });
  });

  // Order tracking endpoint (placeholder)
  app.post("/api/orders", (req, res) => {
    const { planId, device, location } = req.body;
    
    // In a real application, this would create an order in the database
    const orderId = `ORD-${Date.now()}`;
    
    res.json({
      orderId,
      planId,
      device,
      location,
      status: "pending",
      message: "Order received successfully"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
