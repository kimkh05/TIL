import {
  Button,
  Divider,
  Form,
  Header,
  List,
  TextArea,
} from "semantic-ui-react";

export default function About() {
  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사소개
      </Header>
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>DSM UP</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Korea, Daejeon</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">jack@semantic.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />
    </div>
  );
}
