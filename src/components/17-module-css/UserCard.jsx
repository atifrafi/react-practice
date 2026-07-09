// css module
import style from './UserCard.module.css'

const UserCard = (props)=>{
    return (
        <>
        <div className={style.cardBox}>
            <h1 className={style.cardHeading}>name: {props.uname}</h1>
            <p className={style.cardDescription}>description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nisi corporis ab.</p>
            <button className={style.cardButton}>Contact</button>
        </div>
        </>
    )
}

export default UserCard;