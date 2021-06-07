import { Btn } from "@miq/shared";

export default function Layout(props) {
    return (
        <div className="layout">
            <div className="layout-content">{props.children}</div>
        </div>
    );
}

Layout.Header = ({ children }) => <div className="layout-header">{children}</div>;
Layout.Actions = ({ children }) => <div className="layout-actions">{children}</div>;

export const IncrementBtn = (props) => <Btn {...props} label="Increment" />;
export const DecrementBtn = (props) => <Btn {...props} label="Decrement" />;
