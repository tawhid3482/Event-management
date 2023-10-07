import { useEffect, useState } from "react";

const JsonHook = () => {
  const [service, setService] = useState();
  useEffect(() => {
    fetch('/service.json')
    .then(res => res.json())
    .then(data => setService(data))
  }, []);
  return [service]
};

export default JsonHook;
