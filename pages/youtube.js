import { Box, Divider, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Search from '../components/Search'
import Image from "next/image";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { MdOutlineFileDownload } from 'react-icons/md'
import Title from "../components/Title";
import { ufs } from '../utilities/ufs';

const youtube = () => {
  const [info, setInfo] = React.useState();
  const [audioList, setAudioList] = React.useState([]);
  const [videoList, setVideoList] = React.useState([]);
  return (
    <Stack direction={'column'} alignItems={'center'} spacing={2} sx={{
      width: '100%',
      maxWidth: '98vw'
    }}>
        <Search fullWidth onSubmit={async (e, data) => {      
          // Fetch data from external API
          const res = await fetch('/api/v1/ytdl?q=' + data.search);
          const data1 = await res.json()
          console.log(data1);
          if(data1.success){
            setInfo(data1.message.info)
            let tempList = data1.message.audio;
            // tempList.map(async (val, index) => {
            //   tempList[index] = {
            //     ...val,
            //     previewFileSize: await ufs(val.url)
            //   }
            // })
            setAudioList(tempList)
            setVideoList(data1.message.video)
          }
        }}/>
        {
          info ? <>
          <img
            src={info.videoDetails.thumbnails[info.videoDetails.thumbnails.length - 1].url}
            alt={info.title}
            // height={"30px"}
            width={"280px"}
            />
              <Typography>{info.videoDetails.title}</Typography>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography variant={'body2'} >{info.videoDetails.viewCount || 0} Views</Typography>
                <span>
                  <IconButton size={'small'} color={'secondary'}>
                    <AiOutlineLike />
                  </IconButton>
                  <Typography variant={''}>{info.videoDetails.likes || 0}</Typography>
                </span>
                <span>
                <IconButton size={'small'} color={'tarnary'}>
                  <AiOutlineDislike />
                </IconButton>
                <Typography variant={''}>{info.videoDetails.dislikes || 0}</Typography>
                </span>
              </Stack>      
        <Title text={'Audio'}/>
        <TableContainer sx={{
          maxWidth: '95vw',
          overflowX: 'auto',
        }}>
        <Table aria-label="simple table" sx={{
          '& *': {
            borderColor: 'transparent !important'
          }
        }}>
        <TableHead>
          <TableRow>
            <TableCell>Quality</TableCell>
            <TableCell align="left">Ext.</TableCell>
            <TableCell align="left">Size</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {audioList?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.audioQuality}</TableCell>
              <TableCell  align="left">
                {row.container}
              </TableCell>
              <TableCell  align="left">
                {row.previewFileSize || '-'} mb
              </TableCell>
              <TableCell align="right">
                  <IconButton color={'secondary'} onClick={async () => {      
                  console.log(row.url);
                  // Fetch data from external API
                  const res = await fetch('/api/v1/ytdl', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify(
                      {
                        url: row.url,
                        title: info.title
                      }
                    )
                  });
                  // const res = await fetch('/api/v1/download?url=' + row.url)
                }}>
                    <MdOutlineFileDownload />
                  </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
{/*           
      <Title text={'Video'}/>
        <Table aria-label="simple table" sx={{
          '& *': {
            borderColor: 'transparent !important'
          }
        }}>
        <TableHead>
          <TableRow>
            <TableCell>Quality</TableCell>
            <TableCell align="left">Ext.</TableCell>
            <TableCell align="left">Size</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {videoList?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.qualityLabel}</TableCell>
              <TableCell  align="left">
                {row.container}
              </TableCell>
              <TableCell  align="left">
                {row.bitrate}
              </TableCell>
              <TableCell align="right">
                  <IconButton onClick={() => console.log(row.url)}>
                    <MdOutlineFileDownload />
                  </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
          </> : <></>
        }
    </Stack>
  )
}

export default youtube