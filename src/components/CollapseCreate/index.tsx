import React, {useState, useMemo, useCallback} from "react"
import {Collapse} from 'react-collapse';
import styles from "./CollapseCreate.module.css"

type Props = {
    label: string;
    content?: Array<string> | [];
}

const CollapseCreate: React.FC<Props> = ({label, content = []}) => {
    const [isOpened, setIsOpened] = useState(false)
    const [list, setList] = useState([...content])

    const renderContentList = useMemo(() => {
        const array = list.filter((item)=>{
            return item !== ""
        })
        if(array.length > 0 && array.length < 5){
            let total = array.join(", ")
            return <p className={styles["collapse-list"]}>{total}</p>
        }else if (array.length > 4){
            let total = ""
            array.every((val, index)=>{
                if(index === 3){
                    total = total.concat("& 7 more")
                    return false
                }else{
                    total = total.concat(val).concat(", ")
                    return true
                }
            })
            return <p className={styles["collapse-list"]}>{total}</p>
        }
        return null
    }, [list])

    const handleChangeList = (val)=>{
        let flag = false
        let arr = [...list]
        arr.every((item)=>{
            if( val === item ){
                flag = true
                return false
            }
            return true
        })
        if(flag){
            for ( let i in arr ){
                if(arr[i] === val) arr.splice(Number(i), 1, "")
            }
        }else{
            switch (val) {
                case "View":
                    arr.splice(0, 1, "View")
                    break;
                case "Create":
                    arr.splice(1, 1, "Create")
                    break;
                case "Edit":
                    arr.splice(2, 1, "Edit")
                    break;
                case "Delete":
                    arr.splice(3, 1, "Delete")
                    break;
                default:
                    break;
            }
        }
        setList(arr)
    }

    const checkChecked = useCallback((val) => {
        let flag = false
        list.every((item)=>{
            if(item===val){
                flag = true
                return false
            }
            return true
        })
        return flag;
    }, [list])

    const renderCheckbox = (arr) =>{
        return arr.map((item, index)=>{
            return (
                <div key={index}>
                    <input className="mr-2" type="checkbox" name={item} value={item} checked={checkChecked(item)} onChange={(e)=>{handleChangeList(e.target.value)}}></input>
                    <label htmlFor={item}>{item}</label><br/>
                </div>
            )
        })
    }

    return (
        <div className={styles["collapse-create"]}>
            <div className="d-flex">
                <label className={styles["collapse-label"]}>{label}</label>
                { content.length > 0 && (
                    <div>
                        <div className={styles["collapse-title"]} onClick={()=>{setIsOpened(!isOpened)}}>
                            {renderContentList}
                            <div>
                                {isOpened ?  <i className="fas fa-caret-left"></i> : <i className="fas fa-caret-down"></i>}
                            </div>
                        </div>
                        <Collapse isOpened={isOpened}> 
                            <div className={styles["collapse-content"]}>
                                {renderCheckbox(content)}
                            </div>
                        </Collapse>
                    </div>
                )}
            </div>
        </div>
    );
  };
  
export default CollapseCreate;