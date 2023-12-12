export const Entrada = () => {

  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/f09bcd94883005.5e8a469d1d127.jpg)'
        }}>

      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Culpa elit aliquip amet qui et.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Lunes</span>
        <h4>28</h4>
      </div>
    </div>
  )
}