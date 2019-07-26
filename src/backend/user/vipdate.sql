delimiter $$
drop procedure if exists update_vipdate;
create procedure update_vipdate()
begin
SET SQL_SAFE_UPDATES = 0;
update `user` set `vip`=`vip`-1 where (curdate() - vipdate > 30) && `vip`> 0 ;
update `user` set `vipdate`=curdate() where (curdate() - vipdate > 30) && `vip`> 0;
end $$

delimiter ;


set global event_scheduler = 1;
drop event if exists e_updateA;
create event if not exists e_updateA
on schedule every 86400 second
on completion preserve
do call update_vipdate();
