import React from 'react'
import { withRouter } from 'react-router'

import { Grid, Typography, Divider } from '@material-ui/core'

import SettingList from './item/SettingList'
import Roulette from './item/Roulette'

/* GameRoulette */
const GameRoulette = () => {
  const [firstEntryList, setFirstEntryList] = React.useState([
    '山田 太郎',
    '佐々木 希',
    '浅井 宣男',
    '小林 火呂絵',
    '小西 理沙'
  ])
  const [firstSelectList, setFirstSelectList] = React.useState([])
  const [secondEntryList, setSecondEntryList] = React.useState([
    '黒田 隆昭',
    '浜崎 尊則',
    '林田 貢太郎',
    '小沢 裕仁'
  ])
  const [secondSelectList, setSecondSelectList] = React.useState([])
  const [thirdEntryList, setThirdEntryList] = React.useState([
    '自己紹介',
    '好きな仕事',
    '嫌いな仕事',
    'やっている仕事',
    '保有しているスキル',
    '得意なこと',
    '実は苦手なこと',
    '最近あった嬉しかったこと',
    '今の内にやっておきたい事'
  ])
  const [thirdSelectList, setThirdSelectList] = React.useState([])

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Item settings.
          </Typography>
          <SettingList
            title={'Respondent.'}
            targetList={firstEntryList}
            setTargetList={setFirstEntryList}
            selectList={firstSelectList}
            setSelectList={setFirstSelectList}
          />
          <SettingList
            title={'Impersonation target.'}
            targetList={secondEntryList}
            setTargetList={setSecondEntryList}
            selectList={secondSelectList}
            setSelectList={setSecondSelectList}
          />
          <SettingList
            title={'Question.'}
            targetList={thirdEntryList}
            setTargetList={setThirdEntryList}
            selectList={thirdSelectList}
            setSelectList={setThirdSelectList}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Answer as other person.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Can you be objective, not subjective.
          </Typography>
          <Divider />
          <br />

          <Typography variant="h5" align="center" color="subtitle1" paragraph>
            Please answer
          </Typography>
          <Roulette selectList={firstSelectList} />
          <Divider />
          <br />

          <Typography variant="h5" align="center" color="subtitle2" paragraph>
            Please tell me about it.
          </Typography>
          <Roulette selectList={thirdSelectList} />

          <Typography variant="h5" align="center" color="subtitle2" paragraph>
            as
          </Typography>
          <Roulette selectList={secondSelectList} />
        </Grid>
      </Grid>
    </div>
  )
}

export default withRouter(GameRoulette)
