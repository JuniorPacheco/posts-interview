import { Button, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { Modal } from "./modal";

interface Props {
  handleCreatePost: (post: PartialPost) => Promise<void>;
}

export const FormPost = ({ handleCreatePost }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleChangeModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const post: PartialPost = {
      title: formData.get("title") as string,
      body: formData.get("body") as string,
    };

    try {
      await handleCreatePost(post);
      (e.target as HTMLFormElement).reset();
      handleChangeModal()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h2" gutterBottom>
            Create Post
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            name="body"
            id="outlined-basic"
            label="Body"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8}>
          <Button type="submit" variant="contained" color="info">
            Create Post
          </Button>
        </Grid>
      </Grid>
      <Modal open={isOpenModal} handleChangeModal={handleChangeModal} />
    </form>
  );
};
