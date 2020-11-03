import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Button,
  Modal,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

// import {
//   Container,
//   Button,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   ModalFooter,
// } from "mdbreact";

class ModalInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal1: false,

      modal2: false,
    };
  }

  toggle = (nr) => {
    let modalNumber = "modal" + nr;

    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
    // setTimeout(console.log(this.state.modal1), 2000);
  };

  render() {
    return (
      <Container>
        <Button color="secondary" onClick={() => this.toggle(1)}>
          First Modal
        </Button>

        <Modal open={this.state.modal1} toggle={() => this.toggle(1)}>
          <Card
            style={{
              width: 300,
              height: 450,
              position: "absolute",
              left: "40%",
              top: "25%",
            }}
          >
            <CardHeader toggle={() => this.toggle(1)}>Card title</CardHeader>
            <CardContent>
              💄 Manages modal stacking when one-at-a-time just isn't enough. 🔐
              Creates a backdrop, for disabling interaction below the modal. 🔐
              It disables scrolling of the page content while open. ♿️ It
              properly manages focus; moving to the modal content, and keeping
              it there until the modal is closed. ♿️ Adds the appropriate ARIA
              roles automatically. 📦 5 kB gzipped. Terminology note. The term
              "modal" is sometimes used to mean "dialog", but this is a
              misnomer. A modal window describes parts of a UI. An element is
              considered modal if it blocks interaction with the rest of the
              application.
              <CardActionArea
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button color="secondary" onClick={() => this.toggle(1)}>
                  Close
                </Button>
                <Button color="primary" onClick={() => this.toggle(2)}>
                  Open new Card
                </Button>
              </CardActionArea>
            </CardContent>
          </Card>
        </Modal>

        <Modal
          backdrop={false}
          open={this.state.modal2}
          toggle={() => this.toggle(2)}
        >
          <Card
            style={{
              width: 220,
              height: 300,
              position: "absolute",
              left: "40%",
              top: "25%",
              backgroundColor: "springgreen",
              color: "violet",
            }}
          >
            <CardHeader toggle={() => this.toggle(2)}>Second Card</CardHeader>

            <CardContent>
              💄 Manages modal stacking when one-at-a-time just isn't enough. 🔐
              Creates a backdrop, for disabling interaction below the modal. 🔐
              automatically. 📦 5 kB gzipped. Terminology note.
              <CardActionArea
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button color="secondary" onClick={() => this.toggle(2)}>
                  Close
                </Button>

                <Button color="primary">Save changes</Button>
              </CardActionArea>
            </CardContent>
          </Card>
        </Modal>
      </Container>
    );
  }
}

export default ModalInModal;
