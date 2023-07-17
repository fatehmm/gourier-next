export default function Input(props) {
  return (
    <div>
      <div>
        <input
          value={props.emailValue}
          type="email"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter your email"
          aria-describedby="email-optional"
          onChange={(e) => {
            props.setEmail(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
