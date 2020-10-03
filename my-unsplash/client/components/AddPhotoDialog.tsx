import React, {
  ButtonHTMLAttributes,
  createRef,
  FC,
  Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { Dialog } from "./Dialog";
import styled, { css } from "styled-components";

const DialogTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 500;
`;
const FormFieldContainer = styled.div`
  margin: 1rem 0;
`;
const FormFieldLabel = styled.label`
  font-weight: 200;
  display: block;
  margin-bottom: 0.3rem;
`;
const FormFieldInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #666;
  border-radius: 10px;
  outline: none;
  padding: 0.8rem;
  color: black;
  background: white;
  width: 100%;
  max-width: 100%;
`;

const FormActions = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 0.7rem 0.9rem;
  border: none;
  outline: none;
  border-radius: 1.2rem;
  transition: all 200ms;
`;

interface ButtonInterface {
  color: string;
}
const LinkButton = styled(Button)<ButtonInterface>`
  ${({ color }) => css`
    color: ${color};

    :hover,
    :focus {
      font-weight: bold;
    }

    :active {
      color: #666;
    }
  `};
  background: none;
`;
const RaisedButton = styled(Button)<ButtonInterface>`
  ${({ color }) => css`
    background: ${color};
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);

    :hover,
    :focus {
      box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
    }

    :active {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
    }
  `};
  color: white;
`;
interface CustomButtonProps {
  type?: "link" | "raised";
  color?: "success" | "danger";
  children: any;
}
const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const { type, color, ...other } = props;
    let colorCode = "#666";

    if (color === "success") {
      colorCode = "#48ce48";
    }
    if (color === "danger") {
      colorCode = "red";
    }

    if (props.type) {
      if (props.type === "link") {
        return (
          <LinkButton ref={ref} color={colorCode} {...other}>
            {props.children}
          </LinkButton>
        );
      }
    }
    return (
      <RaisedButton ref={ref} color={colorCode} {...other}>
        {props.children}
      </RaisedButton>
    );
  }
);

interface FormFieldProps {
  label: string;
  placeholder: string;
  onValueChange: (value: string) => void;
}
const FormField: FC<FormFieldProps> = (props) => (
  <FormFieldContainer>
    <FormFieldLabel>{props.label}</FormFieldLabel>
    <FormFieldInput
      placeholder={props.placeholder}
      onChange={(e) => props.onValueChange(e.target.value)}
    />
  </FormFieldContainer>
);

interface AddPhotoDialogProps {
  showDialog: boolean;
  toggleDialog: () => void;
  onSubmit: (value: { description: string; url: string }) => void;
  onCancel: () => void;
}
export const AddPhotoDialog: FC<AddPhotoDialogProps> = (props) => {
  const [label, setLabel] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  return (
    <Dialog show={props.showDialog} onClick={props.toggleDialog}>
      <DialogTitle>Add a new photo</DialogTitle>
      <FormField
        label="Label"
        placeholder="Some label text"
        onValueChange={(v) => setLabel(v)}
      />
      <FormField
        label="Photo URL"
        placeholder="https://some-picture.url"
        onValueChange={(v) => setPhotoURL(v)}
      />
      <FormActions>
        <CustomButton type="link" onClick={() => props.onCancel()}>
          Cancel
        </CustomButton>
        <CustomButton
          color="success"
          disabled={label.length === 0 || photoURL.length === 0}
          onClick={() =>
            props.onSubmit({
              description: label,
              url: photoURL,
            })
          }
        >
          Submit
        </CustomButton>
      </FormActions>
    </Dialog>
  );
};

interface DeletePhotoDialogProps {
  showDialog: boolean;
  toggleDialog: () => void;
  onSubmit: (value: { password: string }) => void;
  onCancel: () => void;
}
export const DeletePhotoDialog: FC<DeletePhotoDialogProps> = (props) => {
  const [password, setPassword] = useState("");

  return (
    <Dialog show={props.showDialog} onClick={props.toggleDialog}>
      <DialogTitle>Are you sure?</DialogTitle>
      <FormField
        label="Password"
        placeholder="**********"
        onValueChange={(v) => setPassword(v)}
      />
      <FormActions>
        <CustomButton type="link" onClick={() => props.onCancel()}>
          Cancel
        </CustomButton>
        <CustomButton
          color="danger"
          onClick={() => props.onSubmit({ password })}
        >
          Delete
        </CustomButton>
      </FormActions>
    </Dialog>
  );
};
