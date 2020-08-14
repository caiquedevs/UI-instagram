import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import Articles from '../../components/Articles';
import Sidebar from '../../components/Sidebar';

export default function Feed({
   match: {
      params: { userId },
   },
}) {
   const [data, setData] = useState(false);
   const history = useHistory();

   useEffect(() => {
      (async () => {
         await api
            .get(`http://localhost:3333/${userId}`)
            .then(response => setData(response.data))
            .catch(() => history.push('/page404'));
      })();
   }, [userId, history]);

   return (
      <>
         <Loading data={data} />
         <Navbar data={data} />
         <div className="container">
            <Articles data={data} name={userId} />
            <Sidebar data={data} name={userId} />
         </div>
      </>
   );
}
