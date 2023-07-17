export default function InputWithDW(props) {
  return (
    <div className="mt-2">
      <label
        htmlFor="phone-number"
        className="block text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>AZ</option>
            <option>RU</option>
            <option>TR</option>
            <option>US</option>
          </select>
        </div>
        <input
          value={props.value}
          type="tel"
          name="phone-number"
          id="phone-number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="+123 (456) 987-6543"
          onChange={(e) => {
            props.setPhone(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
