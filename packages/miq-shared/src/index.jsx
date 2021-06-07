export const Btn = ({ label, ...props }) => (
    <button {...props} className="btn">
        {label}
    </button>
);
