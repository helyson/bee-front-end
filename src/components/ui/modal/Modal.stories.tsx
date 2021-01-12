import React from "react";
import { UIModal } from "./Modal";

export default {
  title: "UI Modal",
  component: UIModal,
};

export const Basic: React.VFC<{}> = () => <UIModal title="titulo de modal" isStory/>;

export const ModalWithCloseIcon: React.VFC<{}> = () => (
  <UIModal title="Modal con Close" hasClose isStory />
);

export const ModalWithChildren: React.VFC<{}> = () => (
  <UIModal title="Modal" hasClose isStory>
    <p>
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum
    </p>
  </UIModal>
);
