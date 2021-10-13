import { useEffect, useState } from "react";
import Info from "./Info";

const CoinsInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    showUserData();
  }, []);
  const showUserData = async () => {
    const information = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_168095ffc3e277f57cb36c5910a95c4b0850&q=crypto#"
    );
    let output = await information.json();
    setInfo(output.results);
    console.log(output);
  };

  return (
    <>
      <div className="coindoc-main">
        <p className="paragraph">Welcome to CryptoNews</p>
      </div>
      {info.map((info) => {
        return (
          <div key={info.title}>
            <Info
              key={info.title}
              name={info.title}
              description={info.description}
              content={info.content}
              date={info.pubDate}
            />
          </div>
        );
      })}
    </>
  );
};

export default CoinsInfo;

//  "https://newsdata.io/api/1/news?apikey=pub_168095ffc3e277f57cb36c5910a95c4b0850&q=crypto#"
