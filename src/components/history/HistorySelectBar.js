import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { historyActions } from "../../store";
import axios from "axios";

const HistorySelectBar = ({ width = "100%", height = "100%", heading = "Heading", HeadingBgColor = "cornflowerblue", OptionBgColor = "cornflowerblue", Headingcolor = "white", optionColor = "white", fontSize = '1rem' }) => {

    const dispatch = useDispatch();

    // states
    const [option0, setOption0] = useState([]);
    const [option1, setOption1] = useState([]);
    const option2 = ["2022", "2023", "2024"];

    const fetchOptions = async () => {

        let url = ``;
        if (process.env.NODE_ENV === 'development') {
            url += process.env.REACT_APP_API_KEY_DEV;
        }
        else {
            url += process.env.REACT_APP_API_KEY_PROD;
        }

        try {
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

    return (
        <div style={{ width: `${width}`, height: `${height}`, color: `${Headingcolor}`, fontSize: `${fontSize}`, display: "flex", backgroundColor: `${HeadingBgColor}`, marginBottom: "20px" }}>
            <section style={{ width: "65%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2>{heading}</h2>
            </section>
            <section style={{ width: "35%", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                {option0.length > 0 &&
                    <select onChange={(e) => { dispatch(historyActions.setOutletState(e.target.value)) }} style={{ width: "25%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptionBgColor}`, borderStyle: "none" }}>
                        <option value={""}>outlets</option>
                        {option0.map((ele) => {
                            return <option key={ele._id} value={ele._id}>{ele.location}</option>
                        })}
                    </select>
                }
                {option1.length > 0 && <select onChange={(e) => { dispatch(historyActions.setMeatState(e.target.value)) }} style={{ width: "25%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptionBgColor}`, borderStyle: "none" }}>
                    <option value={""}>meats</option>
                    {option1.map((ele) => {
                        return <option key={ele._id} value={ele._id}>{ele.meatType}</option>
                    })}
                </select>}
                {option2.length > 0 &&
                    <select onChange={(e) => { dispatch(historyActions.setYearState(e.target.value)) }} style={{ width: "25%", height: "70%", borderRadius: "4px", color: `${optionColor}`, backgroundColor: `${OptionBgColor}`, borderStyle: "none" }}>
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

export default HistorySelectBar;