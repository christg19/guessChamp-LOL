import '../styles/showChamp.css';

function DivChamp(props) {
  const champContentClasses = props.className;

  return (
    <div >
      <table>
        <thead>
          <tr>
            <th className={champContentClasses}>Champion</th>
            <th className={champContentClasses}>Gender</th>
            <th className={champContentClasses}>Position(s)</th>
            <th className={champContentClasses}>Species</th>
            <th className={champContentClasses}>Resource</th>
            <th className={champContentClasses}>RangeType</th>
            <th className={champContentClasses}>Region(s)</th>
            <th className={champContentClasses}>Release Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='image'><img src={props.champObject.image} alt="Champion" /></td>
            <td className='property' id='gender'>{props.champObject.gender}</td>
            <td className='property' id='position'>{props.champObject.position}</td>
            <td className='property' id='specie'>{props.champObject.specie}</td>
            <td className='property' id='resource'>{props.champObject.resource}</td>
            <td className='property' id='rangeType'>{props.champObject.rangeType}</td>
            <td className='property' id='region'>{props.champObject.region}</td>
            <td className='property' id='release'>{props.champObject.release}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DivChamp;