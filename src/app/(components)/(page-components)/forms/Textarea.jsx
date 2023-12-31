export default function Textarea(props) {
  return (
    <div className={props.class}>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <textarea
          value={props.value}
          rows={props.rowCount}
          name={props.name}
          id={props.name}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => {
            props.setMessage(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
