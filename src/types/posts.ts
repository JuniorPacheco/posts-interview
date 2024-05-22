interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PartialPost {
  title: string;
  body: string;
}

interface PartialPostWithId extends PartialPost {
  id: number;
}