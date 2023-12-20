
type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
}

function BigOrangeButton(props: ButtonProps) {
    return <>
        <button style={{ backgroundColor: 'orange' }}>{props.children}</button>
    </>
}

export default BigOrangeButton;

//<BigRedButton onClick={() => alert('hello')}>Click me</BigRedButton/