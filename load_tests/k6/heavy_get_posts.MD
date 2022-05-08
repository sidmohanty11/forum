
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_posts.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1000 iterations shared among 100 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m01.0s), 100/100 VUs, 100 complete and 0 interrupted iterations
default   [  10% ] 100 VUs  00m01.0s/10m0s  0100/1000 shared iters

running (00m02.0s), 100/100 VUs, 210 complete and 0 interrupted iterations
default   [  21% ] 100 VUs  00m02.0s/10m0s  0210/1000 shared iters

running (00m03.0s), 100/100 VUs, 400 complete and 0 interrupted iterations
default   [  40% ] 100 VUs  00m03.0s/10m0s  0400/1000 shared iters

running (00m04.0s), 100/100 VUs, 543 complete and 0 interrupted iterations
default   [  54% ] 100 VUs  00m04.0s/10m0s  0543/1000 shared iters

running (00m05.0s), 100/100 VUs, 700 complete and 0 interrupted iterations
default   [  70% ] 100 VUs  00m05.0s/10m0s  0700/1000 shared iters

running (00m06.0s), 100/100 VUs, 843 complete and 0 interrupted iterations
default   [  84% ] 100 VUs  00m06.0s/10m0s  0843/1000 shared iters

running (00m06.7s), 000/100 VUs, 1000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m06.7s/10m0s  1000/1000 shared iters

     data_received..................: 1.4 MB 203 kB/s
     data_sent......................: 329 kB 49 kB/s
     http_req_blocked...............: min=0.00ms   avg=0.27ms   med=0.00ms   p(99)=4.68ms   p(99.9)=5.71ms   max=7.07ms   count=1000
     http_req_connecting............: min=0.00ms   avg=0.16ms   med=0.00ms   p(99)=2.67ms   p(99.9)=2.71ms   max=4.07ms   count=1000
     http_req_duration..............: min=318.94ms avg=656.71ms med=651.63ms p(99)=881.23ms p(99.9)=889.53ms max=892.34ms count=1000
       { expected_response:true }...: min=318.94ms avg=656.71ms med=651.63ms p(99)=881.23ms p(99.9)=889.53ms max=892.34ms count=1000
     http_req_failed................: 0.00%  ✓ 0          ✗ 1000 
     http_req_receiving.............: min=0.00ms   avg=0.08ms   med=0.00ms   p(99)=1.02ms   p(99.9)=1.05ms   max=1.05ms   count=1000
     http_req_sending...............: min=0.00ms   avg=0.02ms   med=0.00ms   p(99)=1.03ms   p(99.9)=1.03ms   max=1.55ms   count=1000
     http_req_tls_handshaking.......: min=0.00ms   avg=0.00ms   med=0.00ms   p(99)=0.00ms   p(99.9)=0.00ms   max=0.00ms   count=1000
     http_req_waiting...............: min=318.34ms avg=656.61ms med=651.59ms p(99)=881.23ms p(99.9)=888.94ms max=892.28ms count=1000
     http_reqs......................: 1000   149.899824/s
     iteration_duration.............: min=322.67ms avg=657.56ms med=652.12ms p(99)=889.19ms p(99.9)=898.42ms max=901.38ms count=1000
     iterations.....................: 1000   149.899824/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100

