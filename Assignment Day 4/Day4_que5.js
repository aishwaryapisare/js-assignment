 l e t   s a l e s   =   p r o m p t ( " E n t e r   t h e   s a l e s   " ) ;   
 l e t   c o m m i s s i o n ;   
 i f ( s a l e s   < = 5 0 0 0 ) 
 {   
 c o m m i s s i o n   =   s a l e s * 0 . 0 2 ; 
   c o n s o l e . l o g ( ` T h e   t o t a l   c o m m i s s i o n   i s   $ { c o m m i s s i o n }   ` ) ; 
 } 
 e l s e   i f ( s a l e s   > = 5 0 0 1   & &   s a l e s   < =   1 0 0 0 0 ) 
 {   
 c o m m i s s i o n   =   s a l e s * 0 . 0 5 ;   
 c o n s o l e . l o g ( ` T h e   t o t a l   c o m m i s s i o n   i s   $ { c o m m i s s i o n }   ` ) ; 
 } 
 e l s e   i f ( s a l e s   > =   1 0 0 0 1   & &   s a l e s   < =   2 0 0 0 0 ) 
 {   
 c o m m i s s i o n   =   s a l e s * 0 . 0 7 ; 
   c o n s o l e . l o g ( ` T h e   t o t a l   c o m m i s s i o n   i s   $ { c o m m i s s i o n }   ` ) ; 
 } 
 e l s e   
 {   
 c o m m i s s i o n   =   s a l e s * 0 . 1 ;   c o n s o l e . l o g ( ` T h e   t o t a l   c o m m i s s i o n   i s   $ { c o m m i s s i o n }   ` ) ; 
 } 
