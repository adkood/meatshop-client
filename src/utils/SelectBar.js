import react, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { outletActions } from "../store";
import axios from "axios";

const SelectBar = ({ width = "100%", height = "100%", heading = "Heading", HeadingBgColor = "white", OptionBgColor = "lightskyblue", Headingcolor = "lightskyblue", optionColor = "white", fontSize = '1rem', type = "" }) => {

    const dispatch = useDispatch();

    // states
    const [option0, setOption0] = useState([]);
    const [option1, setOption1] = useState([]);
    const option2 = ["2022", "2023", "2024"];

    const fetchOptions = async () => {
        try {

            let url = ``;
            if (process.env.NODE_ENV === 'development') {
                url += process.env.REACT_APP_API_KEY_DEV;
            }
            else {
                url += process.env.REACT_APP_API_KEY_PROD;
            }

            const res1 = await axios.get(url + '/api/outlets');
            setOption0(res1.data.data.outlets);
            const res2 = await axios.get(url + '/api/meats');
            setOption1(res2.data.data.meats);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchOptions();
    }, []);

    // change handlers
    const yearChangeHandler = (e) => {
        if (type === 'quantity') {
            dispatch(outletActions.setQuantityYearState(e.target.value));
        }
        else if (type === 'value') {
            dispatch(outletActions.setValueYearState(e.target.value));
        }
        else {
            dispatch(outletActions.setRefillYearState(e.target.value));
        }
    }

    const meatChangeHandler = (e) => {
        if (type === 'quantity') {
            dispatch(outletActions.setQuantityMeatState(e.target.value));
        }
        else if (type === 'value') {
            dispatch(outletActions.setValueMeatState(e.target.value));
        }
        else {
            dispatch(outletActions.setRefillMeatState(e.target.value));
        }
    }

    const outletChangeHandler = (e) => {
        if (type === 'quantity') {
            dispatch(outletActions.setQuantityOutletState(e.target.value));
        }
        else if (type === 'value') {
            dispatch(outletActions.setValueOutletState(e.target.value));
        }
        else {
            dispatch(outletActions.setRefillOutletState(e.target.value));
        }
    }

    return (
        <div style={{ width: `${width}`, height: `${height}`, color: `${Headingcolor}`, fontSize: `${fontSize}`, display: "flex", backgroundColor: `${HeadingBgColor}`, marginBottom: "20px" }}>
            <section style={{ width: "55%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2>{heading}</h2>
            </section>
            <section style={{ width: "45%", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                {option0.length > 0 &&
                    <select onChange={outletChangeHandler} style={{ width: "30%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptionBgColor}`, borderStyle: "none" }}>
                        <option value={""}>outlets</option>
                        {option0.map((ele) => {
                            return <option key={ele._id} value={ele._id}>{ele.location}</option>
                        })}
                    </select>
                }
                {option1.length > 0 && <select onChange={meatChangeHandler} style={{ width: "30%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptionBgColor}`, borderStyle: "none" }}>
                    <option value={""}>meats</option>
                    {option1.map((ele) => {
                        return <option key={ele._id} value={ele._id}>{ele.meatType}</option>
                    })}
                </select>}
                {option2.length > 0 &&
                    <select onChange={yearChangeHandler} style={{ width: "30%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptionBgColor}`, borderStyle: "none" }}>
                        <option value={""}>years</option>
                        {option2.map((ele, i) => {
                            return <option key={i} value={ele}>{ele}</option>
                        })}
                    </select>
                }
            </section>
        </div>
    );
}

export default SelectBar;