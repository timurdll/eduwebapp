import * as React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useNavigate } from "react-router-dom";
import "./Vocabulary.css";
import { useState } from "react";

function VocabularyPage({ mockData, next }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: words, isLoading } = useQuery("words", () => mockData);

  const [audioSrc, setAudioSrc] = useState(null);

  const handleAudioClick = (src) => {
    setAudioSrc(src);
  };

  return (
    <div className="vocabulary__container">
      <TableContainer component={Paper}>
        <Table
          sx={{ maxWidth: "100%", marginRight: "-15px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>{t("word")}</TableCell>
              <TableCell align="center">{t("pronunciation")}</TableCell>
              <TableCell align="center">{t("definition")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={3}>{t("loading")}</TableCell>
              </TableRow>
            )}
            {!isLoading &&
              words &&
              words.map((word) => (
                <TableRow key={word.id}>
                  <TableCell component="th" scope="row">
                    {word.word}
                  </TableCell>
                  <TableCell align="center">
                    {word.pronunciation && (
                      <Button
                        onClick={() => handleAudioClick(word.audio)}
                        disabled={!word.audio} // Disable the button if no audio source is present
                      >
                        <PlayArrowIcon />
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="center">{word.definition}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {audioSrc && (
        <AudioPlayer
          autoPlay
          src={audioSrc}
          onEnded={() => setAudioSrc(null)}
        />
      )}
      <Button
        variant="contained"
        size="small"
        onClick={() => navigate(next)}
        sx={{ width: 150, alignSelf: "center" }}
      >
        {t("next")}
      </Button>
    </div>
  );
}

export default VocabularyPage;
