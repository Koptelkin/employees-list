

const Card = (props) => {

    const name = props.name;
    const separatedName = name.split(' ');
    let upperLetters = '';

    for (let i = 0; i < separatedName.length; i++) {
        if (separatedName[i].length > 2 && !separatedName[i].includes('.')) {
            const letter = separatedName[i].charAt(0);
            upperLetters += letter;
        }
    }

    const textProp = 'text-white font-[Roboto] font-normal';

    return (
        <li class='flex flex-col p-3 bg-[#2C2D2D] rounded-2xl'>
            <div class='flex '>
                <div class={`h-16 w-16 ${textProp} bg-[#545454] text-2xl flex flex-wrap justify-center items-center rounded-xl`}>
                    <span >{upperLetters}</span>
                    </div>
                <div class='flex flex-col pl-2'>
                    <p class={`${textProp}`}>{props.name}</p>
                    <p class={`${textProp}`}>{props.username}</p>
                </div>
                
            </div>
            <p class={`${textProp}`}>email: {props.email}</p>
            <p class={`${textProp}`}>website: {props.website}</p>
            <p class={`${textProp}`}> phone: {props.phone}</p>
        </li>
    )
}

export default Card;