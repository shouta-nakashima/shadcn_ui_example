import * as React from "react";

interface Props {
children?: React.ReactNode;
}

export const UserList = ({ children }: Props) => {
return (
<div>
  <h1>userList</h1>
  {children}
</div>
);
};
