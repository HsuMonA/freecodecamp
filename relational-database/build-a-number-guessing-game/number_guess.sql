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

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

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
    number_of_guesses integer NOT NULL,
    user_id integer NOT NULL
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
-- Name: users; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(100) NOT NULL
);


ALTER TABLE public.users OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (1, 2, 2);
INSERT INTO public.games VALUES (2, 4, 2);
INSERT INTO public.games VALUES (3, 142, 3);
INSERT INTO public.games VALUES (4, 216, 3);
INSERT INTO public.games VALUES (5, 204, 4);
INSERT INTO public.games VALUES (6, 87, 4);
INSERT INTO public.games VALUES (7, 893, 3);
INSERT INTO public.games VALUES (8, 43, 3);
INSERT INTO public.games VALUES (9, 641, 3);
INSERT INTO public.games VALUES (10, 2, 5);
INSERT INTO public.games VALUES (11, 2, 5);
INSERT INTO public.games VALUES (12, 170, 6);
INSERT INTO public.games VALUES (13, 400, 6);
INSERT INTO public.games VALUES (14, 63, 7);
INSERT INTO public.games VALUES (15, 930, 7);
INSERT INTO public.games VALUES (16, 625, 6);
INSERT INTO public.games VALUES (17, 566, 6);
INSERT INTO public.games VALUES (18, 41, 6);
INSERT INTO public.games VALUES (19, 917, 8);
INSERT INTO public.games VALUES (20, 770, 8);
INSERT INTO public.games VALUES (21, 655, 9);
INSERT INTO public.games VALUES (22, 770, 9);
INSERT INTO public.games VALUES (23, 89, 8);
INSERT INTO public.games VALUES (24, 196, 8);
INSERT INTO public.games VALUES (25, 617, 8);
INSERT INTO public.games VALUES (26, 272, 10);
INSERT INTO public.games VALUES (27, 960, 10);
INSERT INTO public.games VALUES (28, 835, 11);
INSERT INTO public.games VALUES (29, 301, 11);
INSERT INTO public.games VALUES (30, 238, 10);
INSERT INTO public.games VALUES (31, 212, 10);
INSERT INTO public.games VALUES (32, 689, 10);
INSERT INTO public.games VALUES (33, 707, 12);
INSERT INTO public.games VALUES (34, 958, 12);
INSERT INTO public.games VALUES (35, 788, 13);
INSERT INTO public.games VALUES (36, 120, 13);
INSERT INTO public.games VALUES (37, 636, 12);
INSERT INTO public.games VALUES (38, 75, 12);
INSERT INTO public.games VALUES (39, 429, 12);
INSERT INTO public.games VALUES (40, 8, 14);
INSERT INTO public.games VALUES (41, 461, 15);
INSERT INTO public.games VALUES (42, 207, 15);
INSERT INTO public.games VALUES (43, 39, 16);
INSERT INTO public.games VALUES (44, 6, 16);
INSERT INTO public.games VALUES (45, 161, 15);
INSERT INTO public.games VALUES (46, 204, 15);
INSERT INTO public.games VALUES (47, 828, 15);
INSERT INTO public.games VALUES (48, 78, 17);
INSERT INTO public.games VALUES (49, 297, 17);
INSERT INTO public.games VALUES (50, 756, 18);
INSERT INTO public.games VALUES (51, 806, 18);
INSERT INTO public.games VALUES (52, 561, 17);
INSERT INTO public.games VALUES (53, 378, 17);
INSERT INTO public.games VALUES (54, 986, 17);
INSERT INTO public.games VALUES (55, 688, 19);
INSERT INTO public.games VALUES (56, 483, 19);
INSERT INTO public.games VALUES (57, 41, 20);
INSERT INTO public.games VALUES (58, 881, 20);
INSERT INTO public.games VALUES (59, 398, 19);
INSERT INTO public.games VALUES (60, 46, 19);
INSERT INTO public.games VALUES (61, 57, 19);
INSERT INTO public.games VALUES (62, 26, 21);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.users VALUES (1, 'Sumi');
INSERT INTO public.users VALUES (2, 'Ron');
INSERT INTO public.users VALUES (3, 'user_1669803450346');
INSERT INTO public.users VALUES (4, 'user_1669803450345');
INSERT INTO public.users VALUES (5, 'Remi');
INSERT INTO public.users VALUES (6, 'user_1669804021926');
INSERT INTO public.users VALUES (7, 'user_1669804021925');
INSERT INTO public.users VALUES (8, 'user_1669804186826');
INSERT INTO public.users VALUES (9, 'user_1669804186825');
INSERT INTO public.users VALUES (10, 'user_1669804255503');
INSERT INTO public.users VALUES (11, 'user_1669804255502');
INSERT INTO public.users VALUES (12, 'user_1669804347756');
INSERT INTO public.users VALUES (13, 'user_1669804347754');
INSERT INTO public.users VALUES (14, 'Mel');
INSERT INTO public.users VALUES (15, 'user_1669804677702');
INSERT INTO public.users VALUES (16, 'user_1669804677701');
INSERT INTO public.users VALUES (17, 'user_1669806455475');
INSERT INTO public.users VALUES (18, 'user_1669806455474');
INSERT INTO public.users VALUES (19, 'user_1669806535573');
INSERT INTO public.users VALUES (20, 'user_1669806535572');
INSERT INTO public.users VALUES (21, '');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 62, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.users_user_id_seq', 21, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: games games_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--
