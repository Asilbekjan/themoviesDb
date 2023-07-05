import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import peoples from "../../repozitory/people";
import PersonComponent from "../../components/personComponent/personComponents";

export default function People() {
  const { title } = useParams();
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPopilerPersonByName(title) {
    setLoading(true);
    const currentPeople = await peoples.getPopilerPersonByName(title);
    setPeopleList(currentPeople);
    setLoading(false);
  }
  useEffect(() => {
    getPopilerPersonByName(title);
  }, [title]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {loading ? (
            <div className="spinner">
              <div className="text-center spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <PersonComponent peopleList={peopleList} />
          )}
        </div>
      </div>
    </div>
  );
}
