type Employee = {
  id: number;
  name: string;
};
type Manager = {
  department: string;
  role: string;
};
type ManagerWithEmployerInfo = Employee & Manager;

const manager: ManagerWithEmployerInfo = {
  id: 12,
  name: "azt",
  department: "IT",
  role: "developer",
};
console.log(manager);
