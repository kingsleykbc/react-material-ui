import React, { useState } from 'react';
import {
	AppBar,
	Button,
	ButtonGroup,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Chip,
	Container,
	Drawer,
	Grid,
	Hidden,
	IconButton,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	SwipeableDrawer,
	Tab,
	Tabs,
	Toolbar,
	Typography
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { purple } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Menu } from '@mui/icons-material';

const MUITest = () => {
	const [tab, setTab] = useState('View questions');
	const [drawer, setDrawer] = useState(false);

	const toggleDrawer = () => {
		setDrawer(!drawer);
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div>
			<SwipeableDrawer open={drawer} onClose={toggleDrawer}>
				<div style={{ maxWidth: '250px' }} onClick={toggleDrawer}>
					{/* USE LIST */}
					<Chip sx={{ mr: 2 }} icon={<AccountCircleIcon />} label='users name' />
					<Tab icon={<ViewListIcon />} label='View questions' />
					<Tab onClick={() => alert('sd')} icon={<AddCircleOutlineIcon />} label='Add question' />
				</div>
			</SwipeableDrawer>

			<AppBar color='secondary' position='sticky'>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<IconButton onClick={toggleDrawer}>
						<Menu />
						<Typography sx={{ ml: 2 }}>CITY SURVEY</Typography>
					</IconButton>
					<Hidden smDown>
						<Tabs value={tab} onChange={(e, val) => setTab(val)}>
							<Tab icon={<ViewListIcon />} label='View questions' />
							<Tab icon={<AddCircleOutlineIcon />} label='Add question' />
						</Tabs>
					</Hidden>

					<Box display='flex' alignItems='center' flexWrap={false}>
						<Hidden smDown>
							<Chip sx={{ mr: 2 }} icon={<AccountCircleIcon />} label='users name' />
						</Hidden>
						<Button startIcon={<ViewListIcon />} variant='contained'>
							LOGOUT
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<Container>
				{/* TYPOGRAPHY */}
				<Typography align='center' padding={3} variant='h4'>
					Typography
				</Typography>
				<hr />

				{/* BUTTONS */}
				<Box
					sx={{
						display: 'flex',
						gap: '10px',
						'@media screen and (max-width: 780px)': {
							flexDirection: "column"
						}
					}}
				>
					<ButtonGroup>
						<Button variant='outlined'>This is a Button</Button>
						<Button variant='outlined'>This is another Button</Button>
					</ButtonGroup>

					<Button variant='contained' startIcon={<SendIcon />}>
						Icon Button
					</Button>
				</Box>

				<hr />

				{/* PAPER */}
				<Grid container spacing={1}>
					<Grid item xs={12} md={6}>
						<Card>
							<CardHeader title='Question Title' action={<Button variant='outlined'>RESPOND</Button>} />
							<CardContent>
								<Typography variant='body2' color='textSecondary'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum labore qui saepe culpa dolorem, totam aut ab
									fugit explicabo necessitatibus consequatur quisquam minima. Obcaecati blanditiis praesentium corrupti impedit nesciunt?
								</Typography>
							</CardContent>
							<CardActions>
								<Chip icon={<SendIcon />} label='20' />
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} md={6}>
						<Card>
							<CardHeader title='Question Title' action={<Button variant='outlined'>RESPOND</Button>} />
							<CardContent>
								<Typography variant='body2' color='textSecondary'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum labore qui saepe culpa dolorem, totam aut ab
									fugit explicabo necessitatibus consequatur quisquam minima. Obcaecati blanditiis praesentium corrupti impedit nesciunt?
								</Typography>
							</CardContent>
							<CardActions>
								<Chip icon={<SendIcon />} label='20' />
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default MUITest;
