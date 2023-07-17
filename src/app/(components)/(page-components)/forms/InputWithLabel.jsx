export default function InputWithLabel(props) {
  return (
    <div className={props.utilities.class}>
      <label
        htmlFor={props.utilities.type}
        className="block text-sm font-medium text-gray-700"
      >
        {props.utilities.name}
      </label>
      <div className="mt-1">
        <input
          type={props.utilities.type}
          name={props.utilities.name}
          id={props.utilities.name}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={props.utilities.placeholder}
          onChange={(e) => props.changeName(e.target.value)}
        />
      </div>
    </div>
  );
}
