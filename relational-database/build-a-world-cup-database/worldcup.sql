--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (593, 2018, 'Final', 4, 2, 930, 931);
INSERT INTO public.games VALUES (594, 2018, 'Third Place', 2, 0, 932, 933);
INSERT INTO public.games VALUES (595, 2018, 'Semi-Final', 2, 1, 931, 933);
INSERT INTO public.games VALUES (596, 2018, 'Semi-Final', 1, 0, 930, 932);
INSERT INTO public.games VALUES (597, 2018, 'Quarter-Final', 3, 2, 931, 934);
INSERT INTO public.games VALUES (598, 2018, 'Quarter-Final', 2, 0, 933, 935);
INSERT INTO public.games VALUES (599, 2018, 'Quarter-Final', 2, 1, 932, 936);
INSERT INTO public.games VALUES (600, 2018, 'Quarter-Final', 2, 0, 930, 937);
INSERT INTO public.games VALUES (601, 2018, 'Eighth-Final', 2, 1, 933, 938);
INSERT INTO public.games VALUES (602, 2018, 'Eighth-Final', 1, 0, 935, 939);
INSERT INTO public.games VALUES (603, 2018, 'Eighth-Final', 3, 2, 932, 940);
INSERT INTO public.games VALUES (604, 2018, 'Eighth-Final', 2, 0, 936, 941);
INSERT INTO public.games VALUES (605, 2018, 'Eighth-Final', 2, 1, 931, 942);
INSERT INTO public.games VALUES (606, 2018, 'Eighth-Final', 2, 1, 934, 943);
INSERT INTO public.games VALUES (607, 2018, 'Eighth-Final', 2, 1, 937, 944);
INSERT INTO public.games VALUES (608, 2018, 'Eighth-Final', 4, 3, 930, 945);
INSERT INTO public.games VALUES (609, 2014, 'Final', 1, 0, 946, 945);
INSERT INTO public.games VALUES (610, 2014, 'Third Place', 3, 0, 947, 936);
INSERT INTO public.games VALUES (611, 2014, 'Semi-Final', 1, 0, 945, 947);
INSERT INTO public.games VALUES (612, 2014, 'Semi-Final', 7, 1, 946, 936);
INSERT INTO public.games VALUES (613, 2014, 'Quarter-Final', 1, 0, 947, 948);
INSERT INTO public.games VALUES (614, 2014, 'Quarter-Final', 1, 0, 945, 932);
INSERT INTO public.games VALUES (615, 2014, 'Quarter-Final', 2, 1, 936, 938);
INSERT INTO public.games VALUES (616, 2014, 'Quarter-Final', 1, 0, 946, 930);
INSERT INTO public.games VALUES (617, 2014, 'Eighth-Final', 2, 1, 936, 949);
INSERT INTO public.games VALUES (618, 2014, 'Eighth-Final', 2, 0, 938, 937);
INSERT INTO public.games VALUES (619, 2014, 'Eighth-Final', 2, 0, 930, 950);
INSERT INTO public.games VALUES (620, 2014, 'Eighth-Final', 2, 1, 946, 951);
INSERT INTO public.games VALUES (621, 2014, 'Eighth-Final', 2, 1, 947, 941);
INSERT INTO public.games VALUES (622, 2014, 'Eighth-Final', 2, 1, 948, 952);
INSERT INTO public.games VALUES (623, 2014, 'Eighth-Final', 1, 0, 945, 939);
INSERT INTO public.games VALUES (624, 2014, 'Eighth-Final', 2, 1, 932, 953);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (930, 'France');
INSERT INTO public.teams VALUES (931, 'Croatia');
INSERT INTO public.teams VALUES (932, 'Belgium');
INSERT INTO public.teams VALUES (933, 'England');
INSERT INTO public.teams VALUES (934, 'Russia');
INSERT INTO public.teams VALUES (935, 'Sweden');
INSERT INTO public.teams VALUES (936, 'Brazil');
INSERT INTO public.teams VALUES (937, 'Uruguay');
INSERT INTO public.teams VALUES (938, 'Colombia');
INSERT INTO public.teams VALUES (939, 'Switzerland');
INSERT INTO public.teams VALUES (940, 'Japan');
INSERT INTO public.teams VALUES (941, 'Mexico');
INSERT INTO public.teams VALUES (942, 'Denmark');
INSERT INTO public.teams VALUES (943, 'Spain');
INSERT INTO public.teams VALUES (944, 'Portugal');
INSERT INTO public.teams VALUES (945, 'Argentina');
INSERT INTO public.teams VALUES (946, 'Germany');
INSERT INTO public.teams VALUES (947, 'Netherlands');
INSERT INTO public.teams VALUES (948, 'Costa Rica');
INSERT INTO public.teams VALUES (949, 'Chile');
INSERT INTO public.teams VALUES (950, 'Nigeria');
INSERT INTO public.teams VALUES (951, 'Algeria');
INSERT INTO public.teams VALUES (952, 'Greece');
INSERT INTO public.teams VALUES (953, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 624, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 953, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

