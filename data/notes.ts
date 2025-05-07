export interface Note {
    id: string;
    title: string;
    content: string;
  }
export const notes : Note[] = [
    {
      id: "1",
      title: "Meeting Notes",
      content: "Discussed project goals and deadlines."
    },
    {
      id: "2",
      title: "Design Ideas",
      content: "Use a sidebar layout, add dark mode toggle."
    },
    {
      id: "3",
      title: "Bug Fixes",
      content: "Fixed authentication issue in login flow. Updated error handling."
    },
    {
      id: "4",
      title: "API Documentation",
      content: "Added Swagger documentation for new endpoints. Updated README."
    },
    {
      id: "5",
      title: "Performance Updates",
      content: "Implemented lazy loading for images. Reduced bundle size by 30%."
    },
    {
      id: "6",
      title: "Team Feedback",
      content: "Code review suggestions: improve error handling, add more comments."
    },
    {
      id: "7",
      title: "Feature Planning",
      content: "New dashboard features: analytics charts, export functionality."
    },
    {
      id: "8",
      title: "Security Review",
      content: "Completed security audit. Need to update dependencies."
    },
    {
      id: "9",
      title: "UI Components",
      content: "Created reusable button and form components. Added storybook entries."
    },
    {
      id: "10",
      title: "Database Schema",
      content: "Updated user table with new fields for profile customization."
    },
    {
      id: "11",
      title: "Testing Strategy",
      content: "Implementing E2E tests with Cypress. Coverage goal: 80%."
    },
    {
      id: "12",
      title: "Deployment Notes",
      content: "Set up CI/CD pipeline with GitHub Actions. Added staging environment."
    },
    {
      id: "13",
      title: "User Feedback",
      content: "Mobile responsiveness issues reported. Priority: High."
    },
    {
      id: "14",
      title: "Architecture Decision",
      content: "Moving to microservices architecture. Phase 1 planning complete."
    },
    {
      id: "15",
      title: "Sprint Planning",
      content: "Q2 objectives: performance optimization, mobile app development."
    },
    {
      id: "16",
      title: "Code Refactoring",
      content: "Converting class components to functional components with hooks."
    },
    {
      id: "17",
      title: "Accessibility Audit",
      content: "Implementing ARIA labels and keyboard navigation improvements."
    }
];