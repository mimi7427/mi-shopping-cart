import React,{useState} from "react";

export default function PopForm(props){
    const [modal, setModal] = useState(true);
    return(
        <div className="form">
            <div className="form2">
                <h3 className="headings" >AddNew</h3>
                    
                <div className="feedback">
                    {modal && <form>
                        <div>
                            <input placeholder="Product Name" name="Product Name"/>
                        </div>
                        <div>
                            <input placeholder="price" name="price"/>
                        </div>
                        <div>
                            <input placeholder="Image" name="image"/>
                        </div>
                        </form>}
                </div>
            </div>
        </div>
    )
}