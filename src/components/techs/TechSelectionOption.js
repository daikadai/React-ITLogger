import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getTechs } from '../../actions/techActions'

const TechSelectionOption = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, [])

  return (
    !loading && techs !== null && techs.map(t => <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
      {t.firstName} {t.lastName}
    </option>)
  )
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelectionOption)
