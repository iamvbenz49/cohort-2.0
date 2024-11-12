type Admin = {
    name: string;
    privileges: string[];
  };
  
  type Userr = {
    name: string;
    email: string;
  };
  
  type AdminUser = Admin & Userr; // Intersection
  
  type Role = "admin" | "user" | "guest"; // Union
  
  const adminUser: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    privileges: ["manage-users", "edit-content"],
  };
  
  let userRole: Role = "admin"; // Can only be "admin", "user", or "guest"
  