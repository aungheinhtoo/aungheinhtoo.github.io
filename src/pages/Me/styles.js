import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`

export const EducationItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const Institution = styled.h4`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`

export const EducationTimeRange = styled.h5`
  font-weight: bold;
`

export const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
`
