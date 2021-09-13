import React from "react";
import axios from "axios";
import growingupman from "../assets/growing-up-man.svg";
import growingupwoman from "../assets/growing-up-woman.svg";
import mail from "../assets/mail.svg";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import ButtonandTable from "./buttonandTable";
import {useState, useEffect} from "react";
import "../design/personInfo.css"

function PersonInfo() {
const [fetchPerson, setFetchPerson] = useState(false)
const [text1, setText1] = useState(false)
const [text2, setText2] = useState(false)
const [loading, setLoading] = useState(false)

const apiFetcher = async () => {
  try {
    await axios.get("https://randomuser.me/api/")
    .then(response => {
      console.log(response?.data?.results[0]) 
      setFetchPerson(response?.data?.results[0]);
    })
   
    setLoading(true)
  }
  catch (e) {
    console.log(e)
  }
  console.log(fetchPerson)
}

useEffect(() => {
  apiFetcher()
},[])

const svgHoverText = (e) => {
  if (e.target.className ==="person svg") {setText1("My name is");setText2(`${fetchPerson?.name?.first} ${fetchPerson?.name?.last}`)}
  if (e.target.className === "mail svg") {setText1("My email is"); setText2(fetchPerson?.email)}
  if (e.target.className === "growing svg") {setText1("My age is"); setText2(fetchPerson?.dob?.age)}
  if (e.target.className === "map svg") {setText1("I live in"); setText2(fetchPerson?.location?.country)}
  if (e.target.className === "phone svg") {setText1("My phone number is"); setText2(fetchPerson?.phone)}
  if (e.target.className === "padlock svg") {setText1("My password is"); setText2(fetchPerson?.login?.password)}
  // console.log(e.target.className)
}

  return (
    <div className="card">
      <nav className="navbar2"></nav>
      <img src={fetchPerson?.picture?.large} alt="passport" className="image"/>
      <div className="personinfo text1">{text1}</div>
      <div className="personinfo text2">{text2}</div>
      <div className="svgcontainer">
        <img src={fetchPerson?.gender === "female" ? woman : man} alt="human" className="person svg" onMouseOver={svgHoverText} />
        <img src={mail} alt="mail" className="mail svg" onMouseOver={svgHoverText}/>
        <img src={fetchPerson?.gender === "female" ? growingupwoman : growingupman} alt="growinghuman" className="growing svg" onMouseOver={svgHoverText}/>
        <img src={map} alt="map" className="map svg" onMouseOver={svgHoverText}/>
        <img src={phone} alt="phone" className="phone svg" onMouseOver={svgHoverText}/>
        <img src={padlock} alt="padlock" className="padlock svg" onMouseOver={svgHoverText}/>
      </div>
      <ButtonandTable apiFetcher = {apiFetcher} loading={loading} fetchPerson={fetchPerson}/>
    </div>
  );
}
export default PersonInfo;
