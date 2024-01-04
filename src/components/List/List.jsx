export const artist = [
    'Wu-Tang',
    'The Notorious B.I.G',
    'Nas',
    'Mars Volta',
    'Led Zeppelin' 
];

export const List = (props) => {
    console.log(props.data);

    // Ensure that props.data is an array before mapping over it
    const dataList = Array.isArray(props.data) ? props.data : [];

    return (
        <ul>
            {props.data && props.data.map((artist, key) => (
                <li key={key}>{artist}</li>
            ))}
        </ul>
    );
};
