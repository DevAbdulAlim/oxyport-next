import axios from "axios";
import { useEffect, useState} from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/users";

    axios.get(apiUrl)
    .then((response) => {
      
    })
  })

  return (
    <div>Home</div>
  )
}
