import { Children, isValidElement } from 'react';

type ThenElseProps = {
  children: React.ReactNode;
};

interface IFProps {
  condition: boolean;
  children: React.ReactNode;
}

const Then = ({ children }: ThenElseProps) => <>{children}</>;
const Else = ({ children }: ThenElseProps) => <>{children}</>;

const IF = ({ condition, children }: IFProps) => {
  let thenNode = null;
  let elseNode = null;
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === Then) {
        thenNode = child;
      }
      if (child.type === Else) {
        elseNode = child;
      }
    }
  });
  return condition ? thenNode : elseNode;
};

IF.Then = Then;
IF.Else = Else;
export { IF };
