import { notes } from "../../../data/notes";
import { Container, Typography } from "@mui/material";

export default function NotePage({ params }: { params: { id: string } }) {
  const note = notes.find(n => n.id === params.id);
  if (!note) return <Container>Note not found</Container>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{note.title}</Typography>
      <Typography>{note.content}</Typography>
    </Container>
  );
}
