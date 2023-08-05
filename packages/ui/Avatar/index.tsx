import * as React from "react";

interface Props {
children?: React.ReactNode;
}

export const Avatar = ({ children }: Props) => {
return (
<div>
  <h1>avatar</h1>
  {children}
</div>
);
};
