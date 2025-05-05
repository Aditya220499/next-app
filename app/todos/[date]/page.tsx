import { todos } from "../../../data/todos";
import { Container, Typography, List, ListItem } from "@mui/material";

export default function TodoPage({ params }: { params: { date: string } }) {
  const todo = todos.find(t => t.date === params.date);
  if (!todo) return <Container>Todo not found</Container>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{todo.title}</Typography>
      <List>
        {todo.tasks.map((task, idx) => (
          <ListItem key={idx}>{task}</ListItem>
        ))}
      </List>
    </Container>
  );
}
