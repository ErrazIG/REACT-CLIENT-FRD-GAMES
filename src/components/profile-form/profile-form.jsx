import axios from "axios";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../atoms/token.atom.js";

const ProfileForm = () => {
    const token = useRecoilValue(tokenAtom);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [decription, setDecription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, email, confirmEmail, password, confirmPassword };
    axios.post(`http://localhost:8080/api/member/${token.name}`, data).then(response => {})
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div className={style.inputForm}>
          <label htmlFor="username"></label>
          <input name="username" type="text" value={username} />
        </div>
        <div className={style.inputForm}>
          <label htmlFor="email"></label>
          <input name="email" type="email" value={email} />
        </div>
        <div className={style.inputForm}>
          <label htmlFor="description"></label>
          <textarea name="description" id="" value={decription}></textarea>
        </div>
      </form>
    </>
  );
};
export default ProfileForm;