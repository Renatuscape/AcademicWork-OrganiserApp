type CardProps = {
    title: string;
    children: React.ReactNode;
}

export default function Card(props: CardProps) {
    return <div className="card">
        <h2>{props.title}</h2>
        <div id="content">{props.children}</div>
    </div>
}