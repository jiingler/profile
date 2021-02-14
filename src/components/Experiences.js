import ItemTitle from './common/ItemTitle';

const Experiences = () => {
  return (
    <div id="experiences" className="experiences section">
      <div className="container">
        <ItemTitle titleName="Experiences" description="this is Experiences"/>
        <div className="row d-md-flex d-block">
          <h3 className="title col-md-3 text-md-start text-center my-3">Education</h3>
          <ul className="content col-md-9 col-12 my-3">
            <li className="row">
              <p className="col-lg-3 col-5 mb-3 p-2 text-end fw-700">
                私立長庚大學
              </p>
              <p className="col-lg-9 col-7 mb-3 p-2">
                資訊管理系 (2012/09-2016/06)
              </p>
            </li>
            <li className="row">
              <p className="col-lg-3 col-5 mb-3 p-2 text-end fw-700">
                臺北市立麗山高級中學
              </p>
              <p className="col-lg-9 col-7 mb-3 p-2">
                一般科 (2009/09-2012/06)
              </p>
            </li>
          </ul>
        </div>

        <div className="row d-md-flex d-block">
          <h3 className="title col-md-3 text-md-start text-center my-3">Careers</h3>
          <ul className="content col-md-9 col-12 my-3">
            <li className="row">
              <p className="col-md-3 col-12 mb-3 p-2 text-md-end fw-700">
                三竹資訊股份有限公司 <br/>Mitake
              </p>
              <div className="col-md-9 col-12 mb-3 p-2">
                <p className="mb-2">APP技術部門 (2019/04-2020/08)</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, explicabo placeat omnis maxime possimus ipsam nam nesciunt, quae alias sit illum voluptatum fugit quasi enim quo accusamus, consectetur molestiae dignissimos quia maiores libero! Aut sapiente esse voluptates, nam incidunt illum aliquam illo nihil perferendis aperiam ratione accusamus officia dolore provident dolor ab nisi. Tenetur, vitae consequuntur eum eos eaque, id explicabo aut ex accusantium hic, est ut quod perspiciatis ducimus assumenda temporibus. Qui beatae nulla tenetur laboriosam aliquam ab saepe?</p>
              </div>
            </li>
            <li className="row">
              <p className="col-md-3 col-12 mb-3 p-2 text-md-end fw-700">
                CBX Software
              </p>
              <div className="col-md-9 col-12 mb-3 p-2">
                <p className="mb-2">Mobile App Team (2017/04-2019/02)</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus laboriosam ducimus placeat pariatur accusamus cumque dolor? Odio voluptas expedita fuga similique illum quibusdam, earum doloremque, accusamus fugit placeat iure debitis veniam rerum consequuntur adipisci facilis modi nisi. Modi neque velit repellendus! Nostrum tempora ullam repellendus iure nisi quo corrupti consectetur unde iusto, corporis perspiciatis nihil in dolor dolore reiciendis? Eius voluptatum quo maiores impedit totam eveniet, ducimus explicabo praesentium soluta error magni, natus sint quisquam laudantium perspiciatis excepturi quos.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;